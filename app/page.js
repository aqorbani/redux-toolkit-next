import Counter from "@/components/Counter";
import styles from "./page.module.css";
import Users from "@/components/Users";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>NEXT - REDUX TOOLKIT</h1>
      <hr />
      <Counter />
      <hr />
      <Users />
    </main>
  );
}
