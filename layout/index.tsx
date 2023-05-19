import React, {AllHTMLAttributes, FC, PropsWithChildren} from 'react';
import styles from "./styles.module.scss"
import Footer from "./footer/footer";

type Props = {} & AllHTMLAttributes<HTMLDivElement>

const Layout: FC<PropsWithChildren<Props>> = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;