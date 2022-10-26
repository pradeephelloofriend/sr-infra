const API_URL = process.env.GQL_API_PATH
async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.GQL_JWT_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.GQL_JWT_TOKEN}`
    }
  
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
  export async function getMenuItems() {
    const data = await fetchAPI(`
    query getMenuItems{
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
            edges {
              node {
                label
                path
                uri
                route {
                  code
                  link
                  name
                }
                childItems {
                  edges {
                    node {
                      label
                      uri
                      route {
                        code
                        link
                        name
                        
                      }
                    }
                  }
                }
                
              }
            }
          }
      }
    `)
    return data?.menuItems?.edges
  }
export async function getFootMenuItems() {
  const data = await fetchAPI(`
    query getFootMenuItems{
      menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            url
            childItems {
              edges {
                node {
                  label
                  url
                  
                }
              }
            }
          }
        }
      }
      }
    `)
  return data?.menuItems?.edges
}