import { MENU_PRODUCTS, MENU_SUBCATEGORIES } from './menu-products.data';

describe('MENU_PRODUCTS', () => {
  it('assigns each product to an official menu subcategory', () => {
    const productsWithoutSubcategory = MENU_PRODUCTS.filter(
      (product) => !(product as { subcategoryId?: string }).subcategoryId,
    );

    expect(productsWithoutSubcategory).toEqual([]);
  });

  it('assigns each subcategory a local image in its own folder', () => {
    const subcategoriesWithoutImage = MENU_SUBCATEGORIES.filter(
      (subcategory) => !(subcategory as { img?: string }).img,
    );

    expect(subcategoriesWithoutImage).toEqual([]);
    expect(
      MENU_SUBCATEGORIES.every((subcategory) =>
        subcategory.img.startsWith('/menu/menu-subcategory-images/'),
      ),
    ).toBe(true);
  });
});
