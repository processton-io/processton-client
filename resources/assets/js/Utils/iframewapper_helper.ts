export function inIframe() {
    if (window != undefined) {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
}

export function postHeight(height:number|string|boolean = false) {
     if (window != undefined) {
        if(height){
            window.parent.postMessage(
                {
                    type: "height",
                    message: parseInt(height as string) + 7,
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
 };

export function postRedirect(link) {
    if (window != undefined) {
        if (inIframe) {
            window.parent.postMessage(
                {
                    type: "redirect",
                    message: link,
                },
                "*"
            );
        }
    }
}

export function postPopUpModel(link) {
    if (window != undefined) {
        if (inIframe) {
            window.parent.postMessage(
                {
                    type: "popup-model",
                    message: link,
                },
                "*"
            );
        }
    }
}
