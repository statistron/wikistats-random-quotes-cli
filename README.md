# Wikistats Random Quotes CLI

## Overview

The Wikistats random quotes CLI allows you to read random statistical quotes from the Simple English version of Wikipedia.  It is based on the free and open source [Wikistats API](https://github.com/statistron/wikistatsAPI)


## Installation

```
npm install -g wikistats-random-quotes-cli
```

## Usage

```
    Usage
        $ wikistats [options]

    Options
        --number   Set number of quotes returned (default: 5). Just type in wikistats without any option to return 5 random statistics.
        --help     Displays this help 

    Examples

        $ wikistats

            • More than 99.7% of the seasons damage was due to Harvey, Irma, and Maria. - 2017 Atlantic Hurricane Season | Wikipedia

            • Caffeine content varies between 0.3% and 1.7% of dry weight (compare this to 2.5–4.5% for tea leaves, and 1.5% for ground coffee). - Yerba Mate | Wikipedia

            • They have won over 76% of their test matches and are the leading test match points scorers of all time. - New Zealand National Rugby Union Team | Wikipedia

            • Since the orange gene is on the X chromosome, about 80% of orange tabby cats are male, and nearly all calico cats are female. - Tabby Cat | Wikipedia

            • Milk fat makes up about 0.55–6% of the yogurt; added in quantities inversely proportional to the amount of milk solids, it lends richness to the yogurt. - Frozen Yogurt | Wikipedia

            

        $ wikistats --number 1

           • SEO has become an important part of marketing campaigns run by businesses to find customers online because 65% of the people who search for something dont look beyond the 5th result of the search engines results page. - Search Engine Optimization | Wikipedia

```

## Credits
Inspired by several famous quote APIs such as [Quotable](https://github.com/lukePeavey/quotable) and [Breaking Bad Quotes API](https://github.com/shevabam/breaking-bad-quotes)