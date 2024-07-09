export const IconsList = ['', 'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle', 'align-center', 'align-justify', 'align-left', 'align-right', 'anchor', 'aperture', 'archive', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right', 'arrow-down', 'arrow-left-circle', 'arrow-left', 'arrow-right-circle', 'arrow-right', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right', 'arrow-up', 'at-sign', 'award', 'bar-chart-2', 'bar-chart', 'battery-charging', 'battery', 'bell-off', 'bell', 'bluetooth', 'bold', 'book-open', 'book', 'bookmark', 'box', 'briefcase', 'calendar', 'camera-off', 'camera', 'cast', 'check-circle', 'check-square', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up', 'chrome', 'circle', 'clipboard', 'clock', 'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'cloud', 'code', 'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass', 'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down', 'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database', 'delete', 'disc', 'divide-circle', 'divide-square', 'divide', 'dollar-sign', 'download-cloud', 'download', 'dribbble', 'droplet', 'edit-2', 'edit-3', 'edit', 'external-link', 'eye-off', 'eye', 'facebook', 'fast-forward', 'feather', 'figma', 'file-minus', 'file-plus', 'file-text', 'file', 'film', 'filter', 'flag', 'folder-minus', 'folder-plus', 'folder', 'framer', 'frown', 'gift', 'git-branch', 'git-commit', 'git-merge', 'git-pull-request', 'github', 'gitlab', 'globe', 'grid', 'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link-2', 'link', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out', 'mail', 'map-pin', 'map', 'maximize-2', 'maximize', 'meh', 'menu', 'message-circle', 'message-square', 'mic-off', 'mic', 'minimize-2', 'minimize', 'minus-circle', 'minus-square', 'minus', 'monitor', 'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move', 'music', 'navigation-2', 'navigation', 'octagon', 'package', 'paperclip', 'pause-circle', 'pause', 'pen-tool', 'percent', 'phone-call', 'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off', 'phone-outgoing', 'phone', 'pie-chart', 'play-circle', 'play', 'plus-circle', 'plus-square', 'plus', 'pocket', 'power', 'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server', 'settings', 'share-2', 'share', 'shield-off', 'shield', 'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'table', 'tablet', 'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash-2', 'trash', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload-cloud', 'upload', 'user-check', 'user-minus', 'user-plus', 'user-x', 'user', 'users', 'video-off', 'video', 'voicemail', 'volume-1', 'volume-2', 'volume-x', 'volume', 'watch', 'wifi-off', 'wifi', 'wind', 'x-circle', 'x-octagon', 'x-square', 'x', 'youtube', 'zap-off', 'zap', 'zoom-in', 'zoom-out'];
export const ButtonType = ['primary', 'secondary', 'dangerous', 'warning', 'success'];

export type AppIconProps = {
    icon: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>|React.MouseEvent<Element, MouseEvent>) => void;
}

export type ButtonProps = {
    type?: string;
    colorType?: string;
    label?: string;
    onClick?: () => void;
    icon?: string | null;
    className?: string;
    children?: React.ReactNode;
    variant?: string;
    disabled?: boolean;
};


export type Org = {
    id?: string|number;
    name: string;
    logo?: string|null;
    full_logo_path?: string|null;
};

export type Auth = {
    user: User|null;
};

export type User = {
    id?: number;
    name: string;
    email: string;
    is_admin?: boolean|null;
    permissions?: string[],
};

export type Application = {
    name: string;
    slug: string;
    icon: string;
    description: string;
    department: string;
    group: string[];
    menu : Menu[];
    interactions: any;
    theme?: {
        type: string;
        nav_bar: string;
        breadcrumb: boolean;
        centered_layout: boolean;
    }
};

export type Menu = {
    label: string,
    slug: string,
    is_hidden?: boolean,
    permissions?: string[],
    icon?: string,
    hidden_links?: string[],
    children?: Menu[],
    active_links: any
}

export type Interaction = {
    name : string, //Backend Name
    title : string, //Title To Show at frontend
    subtitle : string | null, //Subtitle to show at frontend
    slug : string, //Slug for the interaction
    icon : string | null,
    schema : InteractionSchema,
    attachment_values? : any,
};

export type InteractionSchema = {
    header_actions?: any;
    breadcrumbs?: Breadcrumb[],
    filters?: Filter[],
    element?: Element,
    elements?: Element[],
}

export enum ElementTypes {
    ROW = 'row',
    STATS_CARD = 'stats_card', 
    CARD = 'card',
    FORM = 'form',
    GRID = 'grid',
    TEXT = 'text',
    DATA_TABLE = 'data_table',
    TABS = 'tabs',
};

export type Element = {
    type: ElementTypes,
    name?: string,
    title?: string, //Title To Show at frontend
    subtitle?: string | null, //Subtitle to show at frontend
    attachment?: Attachment[],
    permissions?: string[],
    srcOfData?: {
        api_endpoint: string,
    },
    data?: WidgetData,
    width: {
        xxxs?: number|string,
        xxs?: number|string,
        xs?: number|string,
        sm?: number|string,
        md?: number|string,
        lg?: number|string,
        xl?: number|string,
        xxl?: number|string,
        xxxl?: number|string,
    },
    elements?: Element[],

}

export type Action = any;


//Create Widget array typw which can have widgetCard and widgetStat types allowed
export type WidgetData = WidgetFormData | WidgetCardData | WidgetGridData | WidgetDataTableData | WidgetStatData;

export enum WidgetFormType {
    CREATE = 'create',
    EDIT = 'edit',
    DELETE = 'delete',
    CONFIRM = 'confirm',
    BLOCK = 'block'
};

export enum WidgetFormRowType {
    ACCORDION = 'accordion',
    TABS = 'tabs',
    SECTIONS = 'sections',
    ROW = 'row'
};

export enum WidgetFormElementType {
    NATIVE = 'native',
    STRING = 'string',
    TEXT = 'text',
    TEXT_AREA = 'text_area',
    NUMBER = 'number',
    DECIMAL = 'decimal',

    EMAIL = 'email',
    PASSWORD = 'password',
    AMOUNT = 'amount',
    MONEY = 'money',
    PERCENTAGE = 'percentage',
    AGE = 'age',
    DOB = 'date_of_birth',
    DATE = 'date',
    SELECT = 'select',
    SIMPLE_SELECT = 'simple_select',
    URL_SELECT = 'url_select',
    CHECKBOX = 'checkbox',
    ONE_TO_MANY = 'one-to-many',
    PHONE = 'phone',
    TAGS = 'tags',
    ADDRESS = 'address',
    EMAIL_EDITOR = 'email_editor',
    RICH_TEXT_EDITOR = 'rich_text_editor',
    FORM_EDITOR = 'form_editor',
    HIDDEN = 'hidden'
};


export type WidgetFormRowData = {
    width?: widthType,
    title?: string,
    type?: WidgetFormRowType,
    group_label?: string,
    group_description?: string,
    tabs?: WidgetTabData[],
    sections?: WidgetSectionData[],
    elements?: WidgetFormElementData[],
    show_when?: ShowWhenConditions[]
}

export type WidgetForm = {
    name: string,
    title?: string,
    type: WidgetFormType,
    rows: WidgetFormRowData[]
}

export type WidgetFormData = {
    form: WidgetForm,
    submitAt: string,
    values: any,

}

export type WidgetFormElementData = {
    disabled?: boolean;
    label?: string,
    type?: WidgetFormElementType,
    required?: boolean,
    map: string,
    options?: any[],
    show_when?: ShowWhenConditions[],
    url?: string,
    info?: string,
    value?: any,
    config?: {
        elements_label?: string;
        elements?: WidgetFormElementData[],
        defaultCountry?: string,
        attachments?: Attachment[],
        allow_new?: boolean,
        step?: number,
    },
    width?: widthType,
};


export type widthType = {
    xxxs?: number|string,
    xxs?: number|string,
    xs?: number|string,
    sm?: number|string,
    md?: number|string,
    lg?: number|string,
    xl?: number|string,
    xxl?: number|string,
    xxxl?: number|string,
};

export type WidgetTabData = {
    title: string,
    rows: WidgetFormRowData[]
}

export type WidgetSectionData = {
    rows: WidgetFormRowData[]
}


export type WidgetCardHeaderData = {
    title?: string;
    subtitle?: string;
    image?: string;
    icon?: string;
    actions?: Action;
    content?: string | Element[],
}
export type WidgetCardBodyData = {
    actions?: Action;
    content?: string | Element[],
}
export type WidgetCardFooterData = {
    content?: string | Element[],
    actions?: Action,
}
export type WidgetCardData =  {
    header?: WidgetCardHeaderData,
    body?: WidgetCardBodyData,
    footer?: WidgetCardFooterData,
};


export enum WidgetStatCardTypes {
    SIMPLE = 'simple',
    SIMPLE_DUAL = 'simple_dual',
}

export type WidgetStatData = {
    header?: {
        title: string;
        subtitle: string;
        actions: Action
    },
    title: string;
    subtitle?: string;
    type?: WidgetStatCardTypes;
    value: number;
    format?: boolean;
    value_2?: number;
    icon?: string;
    unit?: string;
    unit_2?: string;
    precision?: number;
    seperator?: string;
}

export type WidgetGridItemData = {
    type: WidgetGridItemType,
    title: string,
    subtitle?: string,
    icon?: string,
    actions?: Action
    link?: string,
}

export type WidgetGridData = {
    header?: {
        title: string;
        subtitle: string;
        actions: Action
    },
    items?: WidgetGridItemData[] | null,
    width?: widthType,
}

export enum WidgetGridItemType {
    SIMPLE = 'simple',
    IMAGE = 'image',
    ICON = 'icon',
}

export type WidgetDataTableData = {
    data: {
        current_page : number,
        data: any,
        first_page_url: string,
        from: number,
        last_page: number,
        last_page_url: string,
        links: PaginationLink[],
        next_page_url: string|null,
        path: string,
        per_page: number,
        prev_page_url: string|null,
        to: number,
        total: number,
    },
    config: {
        enableColumnsSelection: boolean,
        enableSearch: boolean,
        enableFilter: boolean,
    },
    element_slug: string,
    columns: any,
    selectedCols: any,
    filters: any,
    actions: any,
    actionsLabel: string,
}

export type PaginationLink = {
    url: string,
    label: string,
    active: boolean
}

export type Breadcrumb = {
    label: string,
    slug: string,
    icon: string | null,
}

export type Filter = {
    type: string,
    key: string,
    label: string,
    value: any,
    placeholder?: string,
    options?: any[],
    format?: string,
}


export type Attachment = {
    key: string;
    value: string;
}

export type ShowWhenConditions = {
    key: string,
    value: any,
    operator: string,
}

export type BuilderProps = {
    auth: Auth;
    application: Application;
    org: Org;
    applications: Application[];
    interaction: Interaction;
    attachments: Attachment[]|null;
    attachment_values: any|null;
    showHeader?: boolean;
    navbarStyle?: string;
};


export type DataTypeDateOfBirth = {
    date: string;
    month: string;
    year: number;
}

export type DataTypeAge = {
    value: number;
    title: string;
}

export type DataTypeAddress = {
}

export type LabelProps = {
    label?: string;
    htmlFor?: string;
    required?: boolean;
    info?: string;
}
