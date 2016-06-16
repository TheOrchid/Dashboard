@extends('dashboard::layouts.auth')

@section('content')




    <div class="login-wrapper">

        <div class="bg-pic">

            <img src="https://pp.vk.me/c636021/v636021062/135d5/DwOFFSbohS0.jpg" alt="" class="lazy">


            <div class="bg-caption pull-bottom text-white wrapper-md m-b-md">
                <h2 class="text-white">
                    Позволяет легко наслаждаться тем, что действительно имеет значение в жизни
                </h2>
                <p class="small">
                    Изображения, размещаемые исключительно только для целей представления, все работы авторского права соответствующего владельца, в противном случае © 2013-2016 Orchid.
                </p>
            </div>

        </div>


        <div class="login-container bg-white b-l b-l-light">
            <div class="padder-lg m-t-lg">
                <img src="/orchid/img/orchid.svg" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" height="22">
                <p class="m-t-lg">Войдите в свой аккаунт</p>

                <form class="m-t-md" role="form"  method="POST" action="{{  url('/dashboard/login') }}">
                    {!! csrf_field() !!}

                    <div class="form-group form-group-default {{ $errors->has('email') ? ' has-error' : '' }}">
                        <label>Email</label>
                        <div class="controls">
                            <input type="email" name="email" placeholder="Ваша электронная почта" class="form-control" required value="{{ old('email') }}">

                            @if ($errors->has('email'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>


                    <div class="form-group form-group-default {{ $errors->has('password') ? ' has-error' : '' }}">
                        <label>Пароль</label>
                        <div class="controls">
                            <input type="password" class="form-control" name="password" placeholder="Ваш пароль" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group row v-center">
                        <div class="col-xs-5">
                            <div class="checkbox">
                                <label class="i-checks">
                                    <input type="checkbox" checked name="remember"><i></i> Запомнить меня
                                </label>
                            </div>
                        </div>
                        <div class="col-xs-7 text-right">
                            <a href="{{ url('/dashboard/password/reset') }}" class="text-primary small">Забыли пароль?</a>
                        </div>
                    </div>



                    <button class="btn btn-primary m-t-md" type="submit">Войти</button>
                </form>

                <div class="pull-bottom">
                    <div class="m-b-lg clearfix v-center">
                        <div class="col-sm-3 col-md-2">
                            <img alt="" class="m-t-xs"  src="/orchid/img/logo.svg"  width="78" height="22">
                        </div>
                        <div class="col-sm-9 no-padding m-t-10">
                            <p>
                                <small>

                                    Создать аккаунт страницы. Если у вас есть учетная запись facebook, войти в него для этого процесса. Войти через <a href="#" class="text-info">Facebook</a> или <a href="#" class="text-info">Google</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


















{{--
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{  url('/dashboard/login') }}">
                            {!! csrf_field() !!}

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input type="password" class="form-control" name="password">

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-btn fa-sign-in"></i>Login
                                    </button>

                                    <a class="btn btn-link" href="{{ url('/dashboard/password/reset') }}">Forgot Your
                                        Password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
--}}
@endsection
