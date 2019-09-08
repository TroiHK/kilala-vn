<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('metaTitle') - Admin Template</title>

    @yield('metaHead')

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('assets/css/app-admin.css') }}">
</head>
<body id="page-top" class="@yield('bodyClass')">

<!-- Page Wrapper -->
<div id="wrapper">

    <!-- Sidebar -->
    @include("admin.blocks.common._sidebar")
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            @include("admin.blocks.common._nav")
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">