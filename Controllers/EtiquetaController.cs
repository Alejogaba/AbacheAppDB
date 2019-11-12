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
    public class EtiquetaController : Controller
    {
        
        private readonly AbacheContext _context;
        public EtiquetaController(AbacheContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EtiquetaItem>>> GetPersona()
        {
            return await _context.EtiquetaItems.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<EtiquetaItem>> GetPersona(int id)
        {
            var etiquetaitem = await _context.EtiquetaItems.FindAsync(id);
            if (etiquetaitem==null)
            {
                return NotFound();
            }
            return etiquetaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<EtiquetaItem>> PostPersona(EtiquetaItem etiquetaitem)
        {
            _context.EtiquetaItems.Add(etiquetaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = etiquetaitem.Id }, etiquetaitem);
        }

     
        }
   
}