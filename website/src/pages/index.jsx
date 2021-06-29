import React from "react";
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

// NOTE: import from root level, because same image is used at main README.md
import imgScheme from "../../../assets/visual_schema.jpg";
import { Header } from "@site/src/features/header";
import { Card, Section } from "@site/src/shared/ui";
// NOTE: Locate at index before of specific route-mapping while Node/SSR building
// "_" for excluding file from routing
import { features, concepts, companies } from "./_config";
import styles from "./styles.module.css";

export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="Structural methodology for frontend projects"
    >
      <Header />
      <main>
        <Section title="Преимущества">
          {features.map((feature) => (
            <Card key={feature.title} size={12 / features.length} {...feature} />
          ))}
        </Section>
        <Section title="Концепции" withAltBg>
          {concepts.map((concept) => (
            <Card key={concept.title} size={12 / concepts.length} {...concept} />
          ))}
        </Section>
        <Section title="Схема" rowClass={styles.scheme}>
          {/* 
            NOTE: Set fixed height for correct alignment from mobile devices
            @see https://t.me/c/1463227827/197935
          */}
          <img className={styles.schemeImg} src={imgScheme} alt="feature-sliced-scheme" />
        </Section>
        <Section title="Компании, использующие методологию" className={styles.companiesContainer}>
          <div className={styles.companies}>
            {companies.map(({url, src, alt}) => (
                <a key={src} className={styles.companiesItem} href={url} target="_blank" rel="noopener noreferrer">
                  <img 
                    className={styles.companiesItemImg}
                    // It's utility, not hook =)
                    src={useBaseUrl(`img/companies/${src}`)}
                    title={alt}
                    alt={alt}
                  />
                </a>
            ))}
          </div>
          <span className={styles.companiesSubtitle}>
            Хотите попасть в этот список?{' '}
            <a href="https://github.com/feature-sliced/documentation/issues/131" target="_blank" rel="noopener noreferrer">
              Сообщите нам
            </a>
          </span>
        </Section>
      </main>
    </Layout>
  );
}