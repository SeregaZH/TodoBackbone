using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApplication.Models
{
  public class TodoItem
  {
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Note { get; set; }
    public bool IsActive { get; set; }
  }
}