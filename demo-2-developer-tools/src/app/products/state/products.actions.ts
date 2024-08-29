import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../product.model";

export const ProductsPageActions = createActionGroup({
    source: 'Products Page',
    events: {
        'Toggle Show Product Code': emptyProps(),
        'Load Products': emptyProps(),
        'Add Products': props<{product: Product}>(),
        'Update Products': props<{product: Product}>(),
        'Delete Products': props<{id: number}>()
    }
})

export const ProductsApiAction = createActionGroup({
    source: 'Products API',
    events: {
        'Products Loaded Success': props<{products:Product[]}>(),
        'Products Loaded Fail': props<{message: string}>(),

        'Products Added Success': props<{products:Product}>(),
        'Products Added Fail': props<{message: string}>(),

        'Products Updated Success': props<{products:Product}>(),
        'Products Updated Fail': props<{message: string}>(),
        
        'Products Deleted Success': props<{id:number}>(),
        'Products Deleted Fail': props<{message: string}>(),
    }
})