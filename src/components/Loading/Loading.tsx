import { FC } from 'react';
import clsx from 'clsx';

import styles from './Loading.module.css';

const Loading: FC = () => (
  <section className={clsx({ [styles.wrapper]: true })}>
    <div className={clsx({ [styles.container]: true })}>
      <div className={clsx({ [styles.circle1]: true })}>
        <div className={clsx({ [styles.circle2]: true })}>
          <div className={clsx({ [styles.circle3]: true })}>
            <div className={clsx({ [styles.circle4]: true })}>
              <div className={clsx({ [styles.circle5]: true })}>
                <div className={clsx({ [styles.circle6]: true })}>
                  <div className={clsx({ [styles.circle7]: true })}>
                    <div className={clsx({ [styles.circle8]: true })} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Loading;
