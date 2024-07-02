import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";

async function Meal() {
  const data = await getMeals();
  console.log("data", data);
  return <MealsGrid meals={data} />;
}

async function MealPage() {
  return (
    <>
      {/* <p>
        <Link href="meals/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="meals/post-2">Post 2</Link>
      </p> */}
      <header className={classes.header}>
        Delicious meals, created{" "}
        <span className={classes.highlight}>by you</span>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense
          fallback={
            <div className={classes.loading}>Fetching Meals...........</div>
          }
        >
          <Meal />
        </Suspense>
      </main>
    </>
  );
}

export default MealPage;
