using Microsoft.EntityFrameworkCore;
using PixelArt.Models.Entities;

namespace PixelArt.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<ColorPanel> ColorPanels { get; set; }
    }
}
