import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
  
  headerMenus: menuItems(where: {location: MENU_1, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  headerLogo: acfOptionsHeader {
    headerFieldGroup {
      logo {
        id
        sourceUrl
        uri
        altText
      }
    }
  },
 siteTitle: generalSettings {
    title
    description
    url
  },
  favIcon: siteLogo {
    altText
    sourceUrl
  }
  footerDown: acfOptionsFooterBottom {
    footerBottomFieldGroup {
      copyrightText
      facebook
      fieldGroupName
      linkedin
      twitter
    }
  }
  footer: acfOptionsFooter {
    footerFieldGroup {
      address
      contactInfoBlurb
      contactInfoHeading
      email1
      email2
      fieldGroupName
      phone
    }
  }
  gravityForm:  gfForm(id: 1, idType: DATABASE_ID) {
    cssClass
    databaseId
    dateCreated
    formFields {
      nodes {
        id
        type
        ... on TextField {
          label
          description
          value
          inputType
        }
      }
    }
    title
  }
`


export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`