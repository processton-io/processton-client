<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 36px;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div className="flex-center position-ref full-height">
            <div className="content">
                <div className="title">
                    @yield('message')
                </div>
            </div>
        </div>
    </body>
    <script>
    function postHeight(height = false) {
        if (window != undefined) {
            if(height){
                window.parent.postMessage(
                    {
                        type: "height",
                        message: height + 7,
                        element_slug: window.location.href,
                    },
                    "*"
                );
            }else{
                window.parent.postMessage(
                    {
                        type: "height",
                        message: window.innerHeight + 7,
                        element_slug: window.location.href,
                    },
                    "*"
                );
            }
        }
    }

    function calculateAndPostHeight() {
        if(window != undefined){
            const { innerWidth: width, innerHeight: height } = window;
            if(ref){
                postHeight(ref.current ? ref.current.clientHeight : height)
            }
        }
    }

    window.addEventListener("load", function (){
        setTimeout((e) => {
            console.log('load')
            calculateAndPostHeight()
        }, 200)
    });

    window.addEventListener("resize", () => {
        calculateAndPostHeight()
    });

    </script>
</html>
