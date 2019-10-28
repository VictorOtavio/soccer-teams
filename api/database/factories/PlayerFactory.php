<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Team;
use App\Models\Player;
use Faker\Generator as Faker;

$factory->define(Player::class, function (Faker $faker) {
    return [
        'team_id' => factory(Team::class)->create()->id,
        'name' => $faker->firstName . ' ' . $faker->lastName,
    ];
});
