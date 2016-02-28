<?php

namespace Orchid\Dashboard\Http\Controllers;

use Orchid\Dashboard\Models\Setting;
use Orchid\Dashboard\Http\Requests\SettingsRequest;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Setting
     */
    public function index()
    {
        return response()->json(
            Setting::sortable()->paginate(15)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param SettingRequest $settings
     *
     * @return \Illuminate\Http\Response
     */
    public function store(SettingRequest $settings)
    {
        Setting::create($settings);
    }

    /**
     * Display the specified resource.
     *
     * @param Setting $setting
     *
     * @return SettingRequest
     */
    public function show(Setting $setting)
    {
        return response()->json($setting);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param SettingRequest $request
     * @param Setting $setting
     *
     * @return \Illuminate\Http\Response
     */
    public function update(SettingRequest $request, Setting $setting)
    {
        $setting->fill($request)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Setting $setting
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        $setting->delete();
    }
}