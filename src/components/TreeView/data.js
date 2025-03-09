export const navigationMenu = [
  {
    "label": "Home",
    "to": "/home"
  },
  {
    "label": "Profile",
    "to": "/profile",
    "children": [
      {
        "label": "Details",
        "to": "/details",
        "children": [
          {
            "label": "Location",
            "to": "/location",
            "children": [
              {
                "label": "Country",
                "to": "/location/country"
              },
              {
                "label": "City",
                "to": "/location/city"
              }
            ]
          },
          {
            "label": "Contact Info",
            "to": "/contact-info"
          }
        ]
      },
      {
        "label": "Preferences",
        "to": "/preferences",
        "children": [
          {
            "label": "Notifications",
            "to": "/preferences/notifications"
          },
          {
            "label": "Privacy",
            "to": "/preferences/privacy"
          }
        ]
      }
    ]
  },
  {
    "label": "Settings",
    "to": "/settings",
    "children": [
      {
        "label": "Account",
        "to": "/account",
        "children": [
          {
            "label": "Change Email",
            "to": "/account/change-email"
          },
          {
            "label": "Change Password",
            "to": "/account/change-password"
          }
        ]
      },
      {
        "label": "Security",
        "to": "/security",
        "children": [
          {
            "label": "Login",
            "to": "/login"
          },
          {
            "label": "Register",
            "to": "/register"
          },
          {
            "label": "Two-Factor Authentication",
            "to": "/security/2fa"
          }
        ]
      }
    ]
  },
  {
    "label": "Dashboard",
    "to": "/dashboard",
    "children": [
      {
        "label": "Analytics",
        "to": "/dashboard/analytics",
        "children": [
          {
            "label": "User Insights",
            "to": "/dashboard/analytics/users"
          },
          {
            "label": "Traffic",
            "to": "/dashboard/analytics/traffic"
          }
        ]
      },
      {
        "label": "Reports",
        "to": "/dashboard/reports",
        "children": [
          {
            "label": "Monthly Reports",
            "to": "/dashboard/reports/monthly"
          },
          {
            "label": "Yearly Reports",
            "to": "/dashboard/reports/yearly"
          }
        ]
      }
    ]
  },
  {
    "label": "Admin",
    "to": "/admin",
    "children": [
      {
        "label": "User Management",
        "to": "/admin/users",
        "children": [
          {
            "label": "Active Users",
            "to": "/admin/users/active"
          },
          {
            "label": "Banned Users",
            "to": "/admin/users/banned"
          }
        ]
      },
      {
        "label": "System Logs",
        "to": "/admin/logs",
        "children": [
          {
            "label": "Error Logs",
            "to": "/admin/logs/errors"
          },
          {
            "label": "Access Logs",
            "to": "/admin/logs/access"
          }
        ]
      }
    ]
  },
  {
    "label": "Help",
    "to": "/help",
    "children": [
      {
        "label": "FAQ",
        "to": "/help/faq"
      },
      {
        "label": "Contact Support",
        "to": "/help/contact"
      }
    ]
  }
];
