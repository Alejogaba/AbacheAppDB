using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskSharpHTTP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class  MensajeController : Controller
    {
        
        private readonly AbacheContext _context;
        public MensajeController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MensajeItem>>> GetMensajes()
        {
            return await _context.MensajeItems.ToListAsync();
        }
        

        
        [HttpPost]
        public async Task<ActionResult<MensajeItem>> PostPersona(MensajeItem mensajeitem)
        {
            _context.MensajeItems.Add(mensajeitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMensajes), new { id = mensajeitem.Id }, mensajeitem);
        }

     
        }
   
}