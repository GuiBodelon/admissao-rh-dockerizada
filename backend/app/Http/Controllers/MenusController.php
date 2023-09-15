<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menus;
use DB;

class MenusController extends Controller
{
    /**
     * Display a listing of the menu items.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menus = \DB::table('menus')
            ->select('id', 'label', 'icon', 'route', 'visible_to_permissions', 'parent_id')
            ->where('status', 1)
            ->where('parent_id', 0)
            ->unionAll(\DB::table('menus')
                        ->select('id', 'label', 'icon', 'route', 'visible_to_permissions', 'parent_id')
                        ->where('status', 1)
                        ->where('parent_id', '!=', 0)
            )
            ->get();
        $menuArray = [];
        foreach($menus as $menu){

            $menuID = $menu->id;
            $menuTitle = $menu->label;
            $menuIcon = $menu->icon;
            $menuHref = $menu->route;
            $menuVisibleToPermissions = $menu->visible_to_permissions;
            $menuParent = $menu->parent_id;

            $permissions = explode(',', $menuVisibleToPermissions);
            $permissionArray = [];
            $id = 1;
            foreach ($permissions as $permission) {
                $permissionArray[] = [
                    'id' => $id,
                    'permission' => trim($permission)
                ];
                $id++;
            }

            $menuArray[] = array(
                "id" => $menuID,
                "title" => $menuTitle,
                "icon" => $menuIcon,
                "href" => $menuHref,
                "visible_to_permissions" => $permissionArray,
                "parent_id" => $menuParent,
            );
        }
        $tree = buildTree($menuArray, 'parent_id', 'id');
        return $tree;
    }
}
