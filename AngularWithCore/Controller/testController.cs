using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularWithCore.Controllers
{
    [Route("api/[Controller]")]
    public class testController : Controller
    {
        [HttpGet("/api/values")]
        public IEnumerable<string> Get()
        {
            return new string[] { "1", "2", "3", "4","5" };
        }
    }
}
