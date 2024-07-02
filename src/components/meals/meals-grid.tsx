import MealItem from "./meal-item";
import classes from "./meal-grid.module.css";

export default function MealsGrid({ meals }: { meals: any }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
