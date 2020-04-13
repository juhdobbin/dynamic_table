export interface ButtonConfig {
    name: string;
    icon: string;
    tooltip: string;
}
export interface ButtonsConfig {
    read: ButtonConfig;
    update: ButtonConfig;
    delete: ButtonConfig;
    download: ButtonConfig;

}

export const buttonsConfig: ButtonsConfig = {
    read: {
        icon: 'search',
        name: 'read',
        tooltip: 'Visualizar'
    },
    update: {
        icon: 'edit',
        name: 'edit',
        tooltip: 'Editar'
    },
    delete: {
        icon: 'delete',
        name: 'delete',
        tooltip: 'Excluir'
    },
    download:
    {
        icon: 'arrow_downward',
        name: 'download',
        tooltip: 'Download'
    }
}