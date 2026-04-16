import os
import instaloader
import requests

L = instaloader.Instaloader(fatal_status_codes=[401, 404, 429])
username = "boity_thee.pk"
try:
    profile = instaloader.Profile.from_username(L.context, username)
    url = profile.profile_pic_url
    print(f"[{username}] Found URL: {url[:30]}...")
    
    response = requests.get(url)
    if response.status_code == 200:
        filepath = "public/images/profiles/patriciaboity.jpg"
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"[{username}] Successfully downloaded to {filepath}.")
    else:
        print(f"[{username}] Failed to download image.")
except Exception as e:
    print(f"[{username}] Error: {e}")
