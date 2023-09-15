<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    use HasFactory;

    protected $table = 'notifications';
    protected $fillable = [
        'sent_by', 'receiver_id', 'title', 'message', 'visible_to_permissions', 'button_route', 'button_label'
    ];

    protected $dateFormat = 'd/m/Y H:i:s';
}
