@if(isset($childs) && $childs)



    @if(isset($groupname))
        <li class="dropdown-header">{{$groupname}}</li>
    @endif

    <li class="dropdown">
        <a class="dropdown-toggle" type="button" id="dropdownMenu-{{$slug}}" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
            <span class="pull-right text-muted">
           <i class="fa fa-fw fa-angle-right text"></i>
                  </span>
            <i class="{{$icon}}"></i>
            <span>{{$label}}</span>
        </a>
        <ul class="dropdown-menu dropdown-full dropdown-lvl" aria-labelledby="dropdownMenu-{{$slug}}">
            {!! Orchid::Menu()->render($slug) !!}
        </ul>
    </li>



    @if(isset($divider) && $divider == true)
        <li class="divider"></li>
    @endif

@else




    @if(isset($groupname))
        <li class="dropdown-header">{{$groupname}}</li>
    @endif

    <li>
        <a href="{{route($route)}}}">
            <i class="{{$icon}}"></i>
            <span>{{$label}}</span>
        </a>
    </li>

    @if(isset($divider) && $divider == true)
        <li class="divider"></li>
    @endif


@endif
