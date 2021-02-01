export type CommonFood = {
  food_name: string;
  serving_unit: string;
  tag_name: string;
  serving_qty: number;
  common_type: unknown;
  tag_id: string;
  photo: {
    thumb: string;
    highres?: string;
  };
  locale: string;
};
