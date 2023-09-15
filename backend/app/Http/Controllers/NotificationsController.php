<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notifications;

class NotificationsController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user_id;
        $userPermission = $request->user_permission;

        $query = Notifications::query();
        $query->where(function ($query) use ($userPermission) {
            $query->where('visible_to_permissions', 'all')
                  ->orWhere('visible_to_permissions', $userPermission);
        });

        $notifications = $query->get();

        return response()->json($notifications);

        echo $userPermission;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Notifications::create([
            'sent_by' => $request->sent_by,
            'receiver_id' => $request->receiver_id,
            'visible_to_permissions' => $request->visible_to_permissions,
            'title' => $request->title,
            'message' => $request->message,
            'button_route' => $request->button_route,
            'button_label' => $request->button_label,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
