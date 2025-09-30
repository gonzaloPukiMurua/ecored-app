import { Button } from "@/components/ui/Button/Button";
import styles from './page.module.css';
import Link from "next/link";

export default function Home() {

  const containerClasses = `${styles.mainContainer} ${styles.backgroundGradient}`;
  
  return (
    <div className={containerClasses}>
      <h1
        className={styles.title}
        style={{ fontFamily: 'var(--font-poppins-semibold)' }}
      >
        Bienvenido a <span>EcoRED</span>
      </h1>

      <Link href="/auth/login" className={styles.buttonWidth}> 
        <Button 
          variant="default" 
        >
          Login
        </Button>
      </Link>

      <Link href="/auth/register" className={styles.buttonWidth}> 
        <Button 
          variant="secondary" 
        >
          Register
        </Button>
      </Link>
    </div>
  );
}