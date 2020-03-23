<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Karaf') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/spinners.css') }}" rel="stylesheet">
        <link href="{{ asset('fontawesome/all.min.css') }}" rel="stylesheet">
        <!-- Styles -->
        <style>
            body, html{
                height: 100%;
            }
        </style>
    </head>
    <body>
        <div>
           <div id="root"></div>
            
            <script src="{{ mix('js/app.js') }}" ></script>
        </div>
    </body>
</html>
