from sqlalchemy import func
from model import User
from model import Venue
from model import Show
from model import City
from model import Time 
from model import Location 
from datetime import datetime
from model import connect_to_db, db
from server import app



def load_users(file_user):
   
    # User.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        password, user_email, user_fname, user_lname, user_type = row.split(",")


        user = User(password=password,
                    user_email=user_email, 
                    user_fname=user_fname, 
                    user_lname=user_lname, 
                    user_type=user_type)
                  
       
        db.session.add(user)
        db.session.commit()


def load_times(file_user):
   
    for row in (open(file_user)):   
        row = row.strip()

    
        monday, tuesday, wednesday, thursday, friday, saturday, sunday, morning, late_morning, early_night, late_night = row.split(",")
     

        time_preference = Time(monday=monday,
                              tuesday=tuesday,
                              wednesday=wednesday,
                              thursday=thursday,
                              friday=friday,
                              saturday=saturday,
                              sunday=sunday,
                              morning=morning,
                              late_morning=late_morning,
                              early_night=early_night,
                              late_night=late_night)
        
        db.session.add(time_preference)
        db.session.commit()


def load_locations(file_user):


    for row in (open(file_user)):
        row = row.strip()

    

        berkeley, burlingame, daly_city, dublin, emeryville, palo_alto, san_francisco, san_jose, santa_clara, sunnyvale = row.split(",")

        new_location = Location(berkeley=berkeley,
                                burlingame=burlingame,
                                daly_city=daly_city,
                                dublin=dublin,
                                emeryville=emeryville,
                                palo_alto=palo_alto,
                                san_francisco=san_francisco,
                                san_jose=san_jose,
                                santa_clara=santa_clara,
                                sunnyvale=sunnyvale)
               
        db.session.add(new_location)
        db.session.commit()



def load_venues(file_user):
   
    # Venue.query.delete()

    for row in (open(file_user)):
        row = row.strip()
        
        user_id, venue_name, venue_url, venue_email, venue_address, venue_city, venue_type, venue_backspace, venue_capacity, venue_license, time_id, venue_rent, venue_ranking = row.split(",")

            # IF YOU ADD THE ACT PREFERRED: ADD THE venue_show_preferred TO THE UMPAKING

        new_venue = Venue(user_id=user_id,
                          venue_name=venue_name, 
                          venue_url=venue_url,
                          venue_email=venue_email,
                          venue_address=venue_address,
                          venue_city=venue_city,
                          venue_type=venue_type,
                          venue_backspace=venue_backspace,
                          venue_capacity=venue_capacity,
                          venue_license=venue_license,
                          time_id=time_id,      
                          venue_rent=venue_rent,
                          venue_ranking=venue_ranking)
                     
        db.session.add(new_venue)
        db.session.commit()


def load_shows(file_user):
   

    for row in (open(file_user)):
        row = row.strip()


        user_id, show_name, show_type, show_url, show_amount_people, show_dressing_room, show_length, location_id, time_id, show_ticket_price, show_rent, show_ranking = row.split(",")

     
         # IF YOU ADD THE ACT PREFERRED: ADD THE show_venue_preferred TO THE UMPAKING
         
        new_show = Show(user_id=user_id,
                        show_name=show_name, 
                        show_type=show_type, 
                        show_url=show_url,
                        show_amount_people=show_amount_people,
                        show_dressing_room=show_dressing_room,
                        show_length=show_length,
                        location_id=location_id,
                        time_id=time_id,
                        show_ticket_price=show_ticket_price, 
                        show_rent=show_rent,
                        show_ranking=show_ranking)
                           
        db.session.add(new_show)
        db.session.commit()



def load_cities(file_user):
   
    # City.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        city, county = row.split(",")

        new_city = City(city=city,
                      county=county)
               
        db.session.add(new_city)
        db.session.commit()




if __name__ == "__main__":
    connect_to_db(app)
    # db.create_all()


load_users("data/user_data.txt")
load_times("data/time_data.txt")
load_locations("data/locations_data.txt")
load_venues("data/venue_data.txt")
load_shows("data/show_data.txt")
load_cities("data/city_data.txt")




  