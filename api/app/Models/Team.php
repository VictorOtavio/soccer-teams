<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Team extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'coach',
    ];

    /**
     * Return logo URL
     *
     * @param string $value
     * @return string
     */
    public function getLogoAttribute($value)
    {
        if ($value != null) {
            return Storage::disk('public')->url($value);
        }

        return $value;
    }
}
