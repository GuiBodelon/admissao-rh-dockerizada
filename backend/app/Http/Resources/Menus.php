<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class Menus extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'label' => $this->label,
            'icon' => $this->icon,
            'route' => $this->route,
            'visible_to_permissions' => $this->visible_to_permissions,
            'parent_id' => $this->parent_id,
        ];
    }

}
