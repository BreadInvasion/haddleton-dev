import { Box, Image } from '@mantine/core';

import classes from './Logo.module.css';

export function Logo() {
  return (
    <div className={classes.logoContainer}>
      <Image src="/public/mark_neck.svg" />
      <Image src="/public/mark_shirt.svg" className={classes.stackImage} />
      <Image src="/public/mark_hair.svg" className={classes.stackImage} />
      <Image src="/public/mark_eyebrows.svg" className={classes.stackImage} />
      <Image src="/public/mark_head.svg" className={classes.stackImage} />
      <Image src="/public/mark_ear.svg" className={classes.stackImage} />
      <Image src="/public/mark_glasses.svg" className={classes.stackImage} />
      <Box className={`${classes.stackImage} ${classes.blur}`} />
    </div>
  );
}
