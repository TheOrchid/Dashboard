<?php

namespace Orchid\Dashboard\Http\Controllers\Installer;

use Orchid\Dashboard\Http\Controllers\Controller;
use Orchid\Dashboard\Helpers\Install\DatabaseManager;

class DatabaseController extends Controller
{
    /**
     * @var DatabaseManager
     */
    private $databaseManager;

    /**
     * @param DatabaseManager $databaseManager
     */
    public function __construct(DatabaseManager $databaseManager)
    {
        $this->databaseManager = $databaseManager;
    }

    /**
     * Migrate and seed the database.
     *
     * @return \Illuminate\View\View
     */
    public function database()
    {
        $response = $this->databaseManager->migrateAndSeed();

        return redirect()->route('dashboard::final')
                         ->with(['message' => $response]);
    }
}
