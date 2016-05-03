<?php

namespace Orchid\Dashboard\Http\Composers;

use Cache;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\View\View;

class DashboardNotificationComposer
{
    /**
     * @var
     */
    protected $guard;

    /**
     * DashboardNotificationComposer constructor.
     *
     * @param Guard $guard
     */
    public function __construct(Guard $guard)
    {
        $this->guard = $guard;
    }

    /**
     * Bind data to the view.
     *
     * @param View $view
     */
    public function compose(View $view)
    {
        $UserNotification = Cache::remember('dashboard-notification-user-'.$this->guard->user()->id, 1, function () {
            $notification = $this->guard->user()->notifications()
                ->orderBy('created_at')
                ->limit(10)
                ->get();
            return (!is_null($notification)) ? $notification : [];
        });
        $view->with('UserNotification', $UserNotification);
    }
}
