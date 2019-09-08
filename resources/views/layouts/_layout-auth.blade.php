<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('metaTitle') - Admin Template</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('assets/css/app-admin.css') }}">
</head>
<body class="bg-gradient-primary @yield('bodyClass')">

<main id="main-content" class="container">
    @yield('content')
</main>

<script src="{{ mix('assets/js/app-admin.js') }}"></script>
</body>
</html>