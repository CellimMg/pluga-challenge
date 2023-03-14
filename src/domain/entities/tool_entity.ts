export class Tool {
    id: string;
    name: string;
    color: string;
    icon: string;
    link: string;

    constructor(id: string, name: string, color: string, icon: string, link: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.icon = icon;
        this.link = link;
    }

    static fromJson(json: any): Tool {
        const tool = new Tool(json.app_id, json.name, json.color, json.icon, json.link);
        return tool;
    }
}