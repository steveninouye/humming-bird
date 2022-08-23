import Button from 'src/components/Button/Button';
import StyledImg from 'src/components/Image/Image';
import NavBar from 'src/components/NavBar/NavBar';
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import homeRings from 'public/home-rings.jpeg';
import { useId, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.scss';

const HomePage: NextPage = () => {
  const router = useRouter();
  const id = useId();
  const locationInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = locationInputRef?.current?.value;
    if (!value) return;
    router.push({
      pathname: '/vendors',
      query: { q: value },
    });
  };

  return (
    <>
      <Head>
        <title>Humming Bird</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.main}>
        <h1 className={styles.heading1}>
          <span className={styles.headingSecondary}>Find</span>
          <span className={styles.headingPrimary}>Wedding Vendors</span>
          <span className={styles.headingSecondary}>that are the</span>
          <span className={styles.headingPrimary}>Perfect Fit</span>
        </h1>
        <h2 className={styles.heading2}>
          We match vendors on over 100 attributes to find one that fits you
        </h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <span>
            <InputLabel className={styles.label} htmlFor={id}>
              Search a Location
            </InputLabel>
            <OutlinedInput
              className={styles.input}
              id={id}
              inputRef={locationInputRef}
              placeholder="96185"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </span>
          <Button text="Search" />
        </form>
        <StyledImg
          layout="intrinsic"
          className={styles.image}
          src={homeRings}
          alt="rings"
          width="700px"
          height="433px"
        />
      </div>
    </>
  );
};

export default HomePage;
