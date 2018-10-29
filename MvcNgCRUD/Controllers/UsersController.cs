using MvcNgCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace MvcNgCRUD.Controllers
{
    [RoutePrefix("api/Users")]
    public class UsersController : ApiController
    {
        [Route("GetUsers")]
        [HttpGet]
        public IHttpActionResult Gerusers()
        {
            try
            {
                using (UsersContext db = new UsersContext())
                {
                    var users = db.UserMasters.ToList();
                    return Json(users);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return Json("");                
        }

        [Route("AddUser")]
        [HttpPost]
        public IHttpActionResult AddUser(UserMaster user)
        {
            try
            {
                using (UsersContext db = new UsersContext())
                {
                    db.UserMasters.Add(user);
                    db.SaveChanges();

                    return Ok();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
            
        }
    }
}