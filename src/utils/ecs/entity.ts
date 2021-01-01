import { IComponent } from './component.h'
export abstract class Entity {
    protected _components: IComponent[] = []
}