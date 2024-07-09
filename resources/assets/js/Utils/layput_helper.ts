import { Application, Menu } from "../types";

export function parseMenu( application : Application){
    return application && application.menu && application.menu.length > 0 ? application.menu.map((menu : Menu) => {
        return {
            label: menu.label,
            icon: menu.icon,
            is_hidden: menu.is_hidden,
            href: route('processton-client.app.interaction',{
                app_slug: application.slug,
                interaction_slug: menu.slug
            }),
            slug: '/'+application.slug+'/'+menu.slug,
            hidden_links: menu?.hidden_links ? menu.hidden_links.map((item) => {
                return route('processton-client.app.interaction',{
                        app_slug: application.slug,
                        interaction_slug: item
                    })
            }) : [],
            children: menu?.children ? menu.children.map((item) => {
                return {
                    label: item.label,
                    is_hidden: item.is_hidden,
                    icon: item.icon,
                    href: route('processton-client.app.interaction',{
                        app_slug: application.slug,
                        interaction_slug: item.slug
                    }),
                    hidden_links: item?.hidden_links ? item.hidden_links.map((item) => {
                        return route('processton-client.app.interaction',{
                                app_slug: application.slug,
                                interaction_slug: item
                            })
                    }) : [],
                }
            }) : []
        }
    }): [];
}