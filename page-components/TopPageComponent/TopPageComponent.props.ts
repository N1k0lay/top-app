import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interfase";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory,
    page: TopPageModel,
    products: ProductModel[],
}