# Gymgoer
 
 ## Deploy Links:
  Netlify Link : https://gymgoer.netlify.app/

  Cyclic Backend Deploy Link :https://gymgoer.cyclic.app

  ## Features
  - [x] Register user 
  - [x] Login with email and password
  - [x] Get user location
  - [x] Locate user on map
  - [x] Show user/owner profile
  - [x] Show unique Qrcode/referal code for user
  - [x] Qrcode Scanner for Owner
  - [x] Add Entry log on Scan QR/Enter referal code
  - [x] Fetch and display all Entries
  - [x] Resposiveness (mobile first)

  ## TODO
  - Social login (Google,Facebook,Apple)
  - Manully Search location
  - 
## Problem Statement
 There are two types of users on the app, one is the normal
‘user’ other is the ‘owner’. Normal users can come to the platform and register
themselves by using social login or by providing the required information (as
shown in the designs). For the owner, there is no registration flow as all the
owners are already onboarded and stored in the DB.

## Normal User Flow :
Once the user register in the application (they can log in
too if already registered). After that they should see google Maps and locate
themselves, also there should be a search bar in google Maps to manually
provide their own location. Once the user provides their location, it should be
stored in the DB and the ‘profile view’ of the user should open. In the profile
view, the user should have a dummy photo, a unique QR code for this user
and a unique referral code, and a list of places where their QR code was
scanned, or a user code was given.

## Owner User Flow :
Once the user login (there is no register flow for such a user,
store some dummy owners with the details mentioned below). After login, the
user will see an option to type the user code of ‘normal user’ and a camera to
scan the QR code of ‘normal user’. Once the QR code is scanned or the user
code is punched, it should populate in the list shown below.

## References :
- https://chakra-ui.com/
- https://date-fns.org/
- https://developer.mozilla.org/
- https://rapidapi.com/


## Toolsets :
- cyclic.sh
- Netlify
- MongoDB
- Rapidapi.com
- MapBox

## Packages used :
- chakra-ui
- chakra-ui/icons
- @mapbox/mapbox-gl-geocoder
- axios
- date-fns
- mapbox-gl
- qrcode.react
- react-geocode
- react-geocoder-mapbox
- react-icons
- react-map-gl
- react-qr-reader
- react-redux
- react-router-dom
- react-script
- redux
- redux-thunk