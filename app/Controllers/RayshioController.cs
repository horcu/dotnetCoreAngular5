﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angular.NET_Core_RESTfulAPI1.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class RayshioController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "this is the rayshio controller" };
        }

        [HttpPost]
        public string Post(string msg)
        {
            return msg;
        }
    }
}