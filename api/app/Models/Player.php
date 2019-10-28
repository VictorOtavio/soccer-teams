<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Player extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'team_id', 'name',
    ];

    /**
     * Get the team that owns the player.
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
