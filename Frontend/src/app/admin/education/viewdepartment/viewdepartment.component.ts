import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.scss'],
})
export class ViewdepartmentComponent {

  public dept: any[] = [];
  isModalOpen: boolean = false;
  isEditing = false;
  isDeleteModalOpen = false;
  deptToDelete: any;

  deptForm = {
    deptName: '',
    deptDescription: '',
    dept_id: ''
  };

  constructor(private db: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.fetchDepartment();
  }

  fetchDepartment() {
    this.db.fetchDepartment().then((data) => {
      this.dept = data;
      console.log(data);
    });
  }

  openModal(mode: string, item?: any) {
    this.isModalOpen = true;
    this.isEditing = mode === 'edit';
    if (this.isEditing && item) {
      this.deptForm.deptName = item.dept_name;
      this.deptForm.deptDescription = item.dept_description;
      this.deptForm.dept_id = item.dept_id
    } else {
      this.deptForm = { deptName: '', deptDescription: '' , dept_id: ''}; // Reset form for adding
    }
  }
  closeModal() {
    this.isModalOpen = false;
  }

  submitDepartment() {
    if (this.deptForm.deptName && this.deptForm.deptDescription) {
      if (this.isEditing) {
        const deptIndex = this.dept.findIndex(d => d.dept_id === this.deptForm.dept_id); // Ensure dept_id is part of deptForm
        if (deptIndex !== -1) {
          this.db.updateDepartment(this.deptForm).then((confirmation: any) => {
            console.log(confirmation);
            if (confirmation.message === 'Success') {
              this.dept[deptIndex] = { ...this.dept[deptIndex], ...this.deptForm };
              alert('Department updated successfully');
              this.closeModal();
              window.location.reload();
            } else {
              alert('Update failed');
            }
          }).catch((error: any) => {
            console.error('Error updating department:', error);
            alert('Error updating department');
          });
        }
      } else {
        this.db.createDepartment(this.deptForm).then((confirmation: any) => {
          if (confirmation.message === 'Success') {
            alert('Department added successfully');
            this.closeModal();
            window.location.reload();
          } else {
            alert('Failed to add department');
          }
        }).catch((error: any) => {
          console.error('Error adding department:', error);
          alert('Error adding department');
        });
      }
    } else {
      alert('Please fill in all fields');
    }
  }
  

  deleteDepartment(deptId: number) {
    this.deptToDelete = this.dept.find(d => d.dept_id === deptId); // Store the department to be deleted
    this.isDeleteModalOpen = true; // Show the confirmation modal
  }

  // Method to close the delete modal without deleting
  closeDeleteModal() {
    this.isDeleteModalOpen = false; // Hide the confirmation modal
    this.deptToDelete = null; // Clear the department to be deleted
  }

  // Method to confirm deletion
  confirmDelete() {
    if (this.deptToDelete) {
      // Perform the delete action (update the backend and local array)
      this.db.deleteDepartment(this.deptToDelete.dept_id).then((confirmation: any) => {
        if (confirmation.message === 'Success') {
          // Remove department from local array if delete was successful
          this.dept = this.dept.filter(d => d.dept_id !== this.deptToDelete.dept_id);
          alert('Department deleted successfully');
        } else {
          alert('Failed to delete department');
        }
        this.closeDeleteModal(); // Close the modal after action
      }).catch((error: any) => {
        console.error('Error deleting department:', error);
        alert('Error deleting department');
        this.closeDeleteModal(); // Close the modal after error
      });
    }
  }


}
