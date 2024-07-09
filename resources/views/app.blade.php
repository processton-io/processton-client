<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        {{ Vite::useHotFile('vendor/processton-client/processton-client.hot')
            ->useBuildDirectory("vendor/processton-client")
            ->withEntryPoints(['resources/assets/js/app.css', 'resources/assets/js/app.tsx']) }}
        @inertiaHead
    </head>
    <body className="font-sans antialiased">
        @inertia
    </body>
</html>
