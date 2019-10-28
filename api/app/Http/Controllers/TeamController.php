<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::orderBy('name')->get();
        return response()->json($teams);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $team = Team::create($request->all());
        return response()->json($team, 201);
    }

    /**
     * Store a newly created resource logo in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function storeLogo(Request $request, Team $team)
    {
        $uploadedImage = $request->file('logo');
        $filename = $uploadedImage->hashName();

        $image = Image::make($uploadedImage)->resize(280, 210);

        Storage::disk('public')->put($filename, (string) $image->encode());

        $team->logo = $filename;
        $team->save();

        return response()->json([
            'url' => Storage::disk('public')->url($filename)
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        Storage::disk('public')->delete($team->getOriginal('logo'));
        $team->delete();

        return response()->json(null, 204);
    }
}
