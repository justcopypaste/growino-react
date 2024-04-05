# [GROWINO](https://growino.app)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Versions](#versions)
- [Demo](#demo)
- [Quick start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)

## Versions
## Demo

[View all Pages](https://growino.app).

# Quick start


## Preparation


## Documentation

The documentation for Growino is hosted at our [website](https://www.growino.app/docs).

## File Structure

vision-dashboard-react-free/
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── assets
    │   ├── images
    │   └── theme
    │       ├── base
    │       │   ├── borders.js
    │       │   ├── boxShadows.js
    │       │   ├── breakpoints.js
    │       │   ├── colors.js
    │       │   ├── globals.js
    │       │   ├── typography.css
    │       │   └── typography.js
    │       ├── components
    │       │   ├── button
    │       │   ├── card
    │       │   ├── dialog
    │       │   ├── form
    │       │   ├── list
    │       │   ├── menu
    │       │   ├── stepper
    │       │   ├── table
    │       │   ├── tabs
    │       │   ├── appBar.js
    │       │   ├── avatar.js
    │       │   ├── breadcrumbs.js
    │       │   ├── buttonBase.js
    │       │   ├── container.js
    │       │   ├── divider.js
    │       │   ├── icon.js
    │       │   ├── iconButton.js
    │       │   ├── linearProgress.js
    │       │   ├── link.js
    │       │   ├── popover.js
    │       │   ├── slider.js
    │       │   ├── svgIcon.js
    │       │   └── tooltip.js
    │       ├── functions
    │       │   ├── boxShadow.js
    │       │   ├── gradientChartLine.js
    │       │   ├── hexToRgb.js
    │       │   ├── linearGradient.js
    │       │   ├── pxToRem.js
    │       │   ├── radialGradient.js
    │       │   ├── rgba.js
    │       │   └── tripleLinearGradient.js
    │       ├── index.js
    │       └── theme-rtl.js
    ├── components
    │   ├── VuiAlert
    │   │   ├── index.js
    │   │   ├── VuiAlertCloseIcon.js
    │   │   └── VuiAlertRoot.js
    │   ├── VuiAvatar
    │   │   ├── index.js
    │   │   └── VuiAvatarRoot.js
    │   ├── VuiBadge
    │   │   ├── index.js
    │   │   └── VuiBadgeRoot.js
    │   ├── VuiBox
    │   │   ├── index.js
    │   │   └── VuiBoxRoot.js
    │   ├── VuiButton
    │   │   ├── index.js
    │   │   └── VuiButtonRoot.js
    │   ├── VuiInput
    │   │   ├── index.js
    │   │   ├── VuiInputIconBoxRoot.js
    │   │   ├── VuiInputIconRoot.js
    │   │   ├── VuiInputIcon.js
    │   │   └── VuiInputWithIconRoot.js
    │   ├── VuiPagination
    │   │   ├── index.js
    │   │   └── VuiPaginationItemRoot.js
    │   ├── VuiProgress
    │   │   ├── index.js
    │   │   └── VuiProgressRoot.js
    │   ├── VuiSwitch
    │   │   ├── index.js
    │   │   └── VuiSwitchRoot.js
    │   └── VuiTypography
    │       ├── index.js
    │       └── VuiTypographyRoot.js
    ├── context
    │   └── index.js
    ├── examples
    │   ├── Breadcrumbs
    │   │   └── index.js
    │   ├── Calendar
    │   │   ├── CalendarRoot.js
    │   │   └── index.js
    │   ├── Cards
    │   │   ├── InfoCards
    │   │   │   └── index.js
    │   │   ├── MasterCard
    │   │   │   └── index.js
    │   │   ├── ProjectCards
    │   │   │   └── index.js
    │   │   └── StatisticsCards
    │   │      └── index.js
    │   ├── Charts
    │   │   ├── BarCharts
    │   │   │   └── BarChart.js
    │   │   └── LineCharts
    │   │       └── LineChart.js
    │   ├── Configurator
    │   │   ├── ConfiguratorRoot.js
    │   │   └── index.js
    │   ├── Footer
    │   │   └── index.js
    │   ├── GradientBorder
    │   │   ├── GradientBorderRoot.js
    │   │   └── index.js
    │   ├── Icons
    │   ├── Items
    │   │   ├── index.js
    │   │   └── styles.js
    │   ├── LayoutContainers
    │   │   ├── DashboardLayout
    │   │   │   └── index.js
    │   │   └── PageLayout
    │   │       └── index.js
    │   ├── Lists
    │   │   └── index.js
    │   ├── Navbars
    │   │   ├── DashboardNavbar
    │   │   │   ├── index.js
    │   │   │   └── styles.js
    │   │   ├── DefaultNavbar
    │   │   │   ├── DefaultNavbarLink.js
    │   │   │   ├── DefaultNavbarMobile.js
    │   │   │   └── index.js
    │   ├── Scrollbar
    │   │   └── index.js
    │   ├── Sidenav
    │   │   ├── styles
    │   │   │   ├── sidenav.js
    │   │   │   ├── sidenavCard.js
    │   │   │   └── sidenavCollapse.js
    │   │   ├── index.js
    │   │   ├── SidenavCard.js
    │   │   ├── SidenavCollapse.js
    │   │   └── SidenavRoot.js
    │   ├── Tables
    │   │   └── index.js
    │   └── Timeline
    │       ├── context
    │       │   └── index.js
    │       ├── TimelineItem
    │       │   ├── index.js
    │       │   └── styles.js
    │       └── TimelineList
    │           └── index.js
    ├── layouts
    │   ├── authentication
    │   │   ├── components
    │   │   │   ├── BasicLayout
    │   │   │   │   └── index.js
    │   │   │   ├── CoverLayout
    │   │   │   │   └── index.js
    │   │   │   ├── Footer
    │   │   │   │   └── index.js
    │   │   │   ├── IllustrationLayout
    │   │   │   │   └── index.js
    │   │   │   ├── Separator
    │   │   │   │   └── index.js
    │   │   │   └── Socials
    │   │   │       └── index.js
    │   │   ├── sign-in
    │   │   │   └── index.js
    │   │   └── sign-up
    │   │       └── index.js
    │   ├── billing
    │   │   ├── components
    │   │   │   ├── Bill
    │   │   │   │   └── index.js
    │   │   │   ├── BillingInformation
    │   │   │   │   └── index.js
    │   │   │   ├── CreditBalance
    │   │   │   │   └── index.js
    │   │   │   ├── Invoice
    │   │   │   │   └── index.js
    │   │   │   ├── PaymentMethod
    │   │   │   │   └── index.js
    │   │   │   ├── Transaction
    │   │   │   │   └── index.js
    │   │   │   └── Transactions
    │   │   │       └── index.js
    │   │   └── index.js
    │   ├── dashboard
    │   │   ├── components
    │   │   │   ├── OrderOverview
    │   │   │   │   └── index.js
    │   │   │   ├── Projects
    │   │   │   │   └── index.js
    │   │   │   ├── RefferalTracking
    │   │   │   │   └── index.js
    │   │   │   ├── TempGauge
    │   │   │   │   └── index.js
    │   │   │   └── Camera
    │   │   │       └── index.js
    │   │   ├── data
    │   │   │   ├── barChartData.js
    │   │   │   ├── barChartOptions.js
    │   │   │   ├── lineChartData.js
    │   │   │   └── lineChartOptions.js
    │   │   └── index.js
    │   ├── profile
    │   │   ├── components
    │   │   │   ├── CarInformations
    │   │   │   │   └── index.js
    │   │   │   ├── Header
    │   │   │   │   └── index.js
    │   │   │   ├── PlatformSettings
    │   │   │   │   └── index.js
    │   │   │   └── Welcome
    │   │   │       └── index.js
    │   │   ├── data
    │   │   │   ├── lineChartData1.js
    │   │   │   ├── lineChartData2.js
    │   │   │   ├── lineChartOptions1.js
    │   │   │   └── lineChartOptions2.js
    │   │   └── index.js
    │   ├── rtl
    │   │   ├── components
    │   │   │   ├── OrderOverview
    │   │   │   │   └── index.js
    │   │   │   ├── Projects
    │   │   │   │   └── index.js
    │   │   │   ├── RefferalTracking
    │   │   │   │   └── index.js
    │   │   │   ├── TempGauge
    │   │   │   │   └── index.js
    │   │   │   └── Camera
    │   │   │       └── index.js
    │   │   ├── data
    │   │   │   ├── barChartData.js
    │   │   │   ├── barChartOptions.js
    │   │   │   ├── lineChartData.js
    │   │   │   └── lineChartOptions.js
    │   │   └── index.js
    │   ├── tables
    │   │   ├── data
    │   │   │   ├── authorsTableData.js
    │   │   │   └── projectsTableData.js
    │   │   └── index.js
    ├── variables
    │   └── charts.js
    ├── App.js
    ├── index.js
    ├── routes.js
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLALTE.md
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    └── README.md
```