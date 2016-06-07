<?php

namespace Orchid\Dashboard\Models;

use Illuminate\Database\Eloquent\Model;

class Tagged extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var string
     */
    public $table = 'tagged';
}
